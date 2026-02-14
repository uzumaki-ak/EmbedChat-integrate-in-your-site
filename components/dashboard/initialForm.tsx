"use client";
import { cn } from "@/lib/utils";
import {
  ArrowLeftToLineIcon,
  ArrowRightFromLine,
  BuildingIcon,
  Command,
  Link,
  LucideGlobe,
  WandSparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface InitialData {
  businessName: string;
  websiteUrl: string;
  externalLinks: string;
}

const STEPS = [
  {
    id: "name",
    lablel: "Business name",
    question: "What is the name of your business?",
    description: "This will be the identity of your ai assistant.",
    icon: BuildingIcon,
    Placeholder: "eg. finance business",
    type: "text",
    field: "businessName" as keyof InitialData,
  },
  {
    id: "website",
    lablel: "Website",
    question: "What is the URL of your website?",
    description: "You can change this later in the settings",
    type: "text",
    field: "websiteUrl" as keyof InitialData,
    Placeholder: "eg. https://example.com",
    icon: LucideGlobe,
  },
  {
    id: "externalLinks",
    lablel: "External Links",
    question: "What are the external links of your business?",
    description: "You can change this later in the settings",
    type: "text",
    field: "externalLinks" as keyof InitialData,
    Placeholder: "eg. https://example.com",
    icon: Link,
  },
];

const InitialForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<InitialData>({
    businessName: "",
    websiteUrl: "",
    externalLinks: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const stepData = STEPS[currentStep];

  const Icon = stepData.icon;

  const handleNext = async () => {
    if (isSubmitting) return;
    const currentField = STEPS[currentStep].field;
    const value = formData[currentField];
    if (currentStep < 2 && (!value || value.trim() === "")) return;
    if (currentStep < STEPS.length - 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      handleSUbmit();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (STEPS[currentStep].type === "textarea") {
      if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
        e.preventDefault();
        handleNext();
      }
      return;
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleNext();
    }
  };
  const isStepValid =
    currentStep >= 2 ||
    (formData[stepData.field] && formData[stepData.field].trim().length > 0);

  const handleSUbmit = async () => {
    setIsSubmitting(true);
    
  };

  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 300);
  }, [currentStep]);

  return (
    <>
      {/* Progress bar - fixed at top */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
        <div
          className="h-full bg-linear-to-r from-indigo-50 to-purple-950  transition-all duration-500 ease-out"
          style={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
        />
      </div>

      <div className="fixed top-6 right-6 md:top-8 md:right-8 text-xs font-medium text-zinc-600 uppercase tracking-wider pointer-events-none z-50">
        setup your account
      </div>
      {isSubmitting ? (
        <div className="flex flex-col items-center justify-center animate-accordion-down fade-in duration-700">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full" />
            <div className="relative w-16 h-16 mt-8 flex items-center justify-center">
              <WandSparkles className="w-8 h-8 text-white animate-bounce" />
            </div>
          </div>
          <h2 className="text-2xl font-medium text-white mb-2">
            Storing your information
          </h2>
          <p className="text-zinc-400 text-sm">
            scanning {formData.websiteUrl} for information...
          </p>
        </div>
      ) : (
        <div
          className={cn(
            "transition-all duration-300 ease-in-out transform flex items-center justify-center min-h-screen",
            isAnimating
              ? "opacity-0 scale-95"
              : "opacity-100 scale-100 translate-y-0",
          )}
        >
          <div className="max-w-2xl mx-auto px-6 space-y-6">
            <div className="flex items-start  justify-start gap-2 mb-8">
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="p-2 rounded-full hover:bg-white/5 transition-colors"
                >
                  <ArrowLeftToLineIcon className="w-5 h-5 text-white" />
                </button>
              )}
              <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">
                Step {currentStep + 1} of {STEPS.length}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight text-left">
                {stepData.question}
              </h1>
              <p className="text-zinc-400 text-sm md:text-base text-left">
                {stepData.description}
              </p>
            </div>
            <div className="relative group">
              {stepData.type === "textarea" ? (
                <Textarea
                  ref={inputRef as any}
                  value={formData[stepData.field] as string}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [stepData.field]: e.target.value,
                    })
                  }
                  onKeyDown={handleKeyDown}
                  placeholder={stepData.Placeholder}
                  className="w-full min-h-[100px]"
                  autoFocus
                />
              ) : (
                <Input
                  ref={inputRef as any}
                  value={formData[stepData.field] as string}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [stepData.field]: e.target.value,
                    })
                  }
                  onKeyDown={handleKeyDown}
                  placeholder={stepData.Placeholder}
                  className="w-full bg-transparent border-0 border-b-2 border-white/10 text-xl md:text-2xl py-4 pr-12 text-white placeholder:text-zinc-700  rouned-none h-auto transition-all duration-300 ease-in-out focus-visible:border-indigo-950 focus:ring-0 focus-visible:ring-0"
                  autoFocus
                />
              )}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-800 pointer-events-none">
                <Icon className="w-6 h-6" />
              </div>
            </div>

            <div className="flex items-center justify-between pt-8">
              <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-600 ">
                {stepData.type === "textarea" ? (
                  <>
                    <Command className="w-3 h-3" />
                    <span>+ enter</span>
                  </>
                ) : (
                  <span>press enter ►</span>
                )}
                <span className="ml-1">to continue</span>
              </div>
              <Button
                onClick={handleNext}
                disabled={!isStepValid}
                className={cn(
                  "rouned-full px-8 py-6 text-base font-medium transition-all duration-300 ease-in-out",
                  !isStepValid
                    ? "bg-zinc-800 text-zinc-500 hover:bg-zinc-800 cursor-not-allowed "
                    : "bg-indigo-50 text-black hover:bg-indigo-200 hover:shadow-lg  rounded-e-3xl rounded-b-lg rounded-l-4xl  hover:shadow-indigo-50/10 cursor-pointer ",
                )}
              >
                {currentStep === STEPS.length - 1 ? "Submit" : "Next"}
                {currentStep === STEPS.length - 1 ? (
                  <WandSparkles className="w-5 h-5 ml-2" />
                ) : (
                  <ArrowRightFromLine className="w-5 h-5 ml-2" />
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InitialForm;

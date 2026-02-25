import { Button } from "@/components/ui/button"

type AuthActionButtonProps = {
  canSubmit: boolean
  children: string
}

export function AuthActionButton({ canSubmit, children }: AuthActionButtonProps) {
  return (
    <Button
      type="button"
      className={`w-full h-12 mt-2 rounded-xl shadow-none transition-colors ${
        canSubmit
          ? "bg-[#f7931a] text-white hover:bg-[#ea8710]"
          : "bg-[#f0f0f2] text-[#9a9aa2] hover:bg-[#e8e8ec]"
      }`}
    >
      {children}
    </Button>
  )
}

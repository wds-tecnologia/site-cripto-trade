type AuthBrandProps = {
  subtitle: string
}

export function AuthBrand({ subtitle }: AuthBrandProps) {
  return (
    <div className="mb-8 text-center">
      <div className="mb-4 inline-flex items-center justify-center">
        <img
          src="/vilapaylogo.png"
          alt="Vila Pay Invest"
          className="h-14 w-auto object-contain"
        />
      </div>
      <h1 className="text-[2rem] leading-tight font-semibold text-[#202027]">{subtitle}</h1>
    </div>
  )
}

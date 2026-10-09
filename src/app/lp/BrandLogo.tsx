import Image from "next/image";

export function BrandLogo() {
  return (
    <Image
      className="brand-logo"
      src="/lp/zeimee-logo.png"
      alt="Zeimee"
      width={1397}
      height={289}
      sizes="(max-width: 800px) 124px, 156px"
    />
  );
}

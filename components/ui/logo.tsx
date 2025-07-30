import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2"
      aria-label="OASIS"
    >
      <Image
        src="/images/logo.png"
        alt="OASIS Logo"
        width={24}
        height={28}
        className="h-auto w-auto"
      />
      <Image
        src="/images/logo_full.png"
        alt="OASIS Full Logo"
        width={60}
        height={18}
        className="h-auto w-auto"
      />
    </Link>
  );
}

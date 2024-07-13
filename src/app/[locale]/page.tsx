'use client'
import MainLayout from "@/components/main-layout";
import MainNav from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function Home() {

  const t = useTranslations('Index');
  const router = useRouter()
  const pathname = usePathname();
  const params = useParams();

  const handleChangeLocale = (locale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: locale }
    )
  }

  return (
    <div className="transition">
      <div className="relative flex min-h-screen flex-col bg-background">
        <MainNav />
        <MainLayout />
      </div>
    </div>
  );
}

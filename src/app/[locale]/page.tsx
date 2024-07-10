import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations('Index');

  return (
    <Button>
      {t('title')}
    </Button>
  );
}

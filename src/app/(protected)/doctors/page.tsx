import { PlusIcon } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescriptions,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";
import { auth } from "@/lib/auth";

const DoctorsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/authentication");
  }
  if (!session.user.clinic) {
    redirect("/clinic-form");
  }
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Medicos</PageTitle>
          <PageDescriptions>
            Gerencie os medicos da sua clinica
          </PageDescriptions>
        </PageHeaderContent>
        <PageActions>
          <Button>
            <PlusIcon className="h-4 w-4" />
            Novo medico
          </Button>
        </PageActions>
      </PageHeader>
      <PageContent>
        <h1>Medicos</h1>
      </PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;

import { PlusIcon } from "lucide-react";

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

const DoctorsPage = () => {
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

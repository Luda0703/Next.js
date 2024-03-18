import AddCompanyButton from '@/app/components/add-company-button';
import ClientComponent from './components/client-component';
import ServerComponent from './components/server-component';
import ServerComponentCopy from './components/server-component-copy';

export default function Page() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      <ServerComponent/>
      <ClientComponent><ServerComponentCopy/></ClientComponent>
    </main>
  );
}

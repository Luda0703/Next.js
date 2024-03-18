import AddCompanyButton from '@/app/components/add-company-button';
import MagicButton from './components/magic-button';

export default function Page() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
      <MagicButton/>
    </main>
  );
}

import { redirect } from 'next/navigation';
import { getProviders } from 'next-auth/react';
import Signin from '@/components/Signin';
import { authOptions } from '../[...nextauth]/route';
import { getServerSession } from 'next-auth';

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};
export default async function SignIn({ searchParams: { callbackUrl } }: Props) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className="flex justify-center mt-24">
      <Signin providers={providers} callbackUrl={callbackUrl ?? '/'} />
    </section>
  );
}

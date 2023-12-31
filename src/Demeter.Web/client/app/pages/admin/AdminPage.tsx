import { useEffect, useState } from "react"
import { Account } from "../../models/user";
import { getAcount } from "../../services/auth";

export default function AdminPage() {
  const [account, setAccount] = useState<Account | null>(null);

  const getDate = (date: Date | string | undefined) => {
    if (!date) {
      return '';
    }
    if (date instanceof Date) {
      return date.toDateString();
    }
    return date;
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getAcount();
      setAccount(data);
    }

    fetchData();
  }, []);
  // TODO: show data in table using antd
  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        <p>Name: {account?.name}</p>
        <p>Date Of Birth: {getDate(account?.user?.dateOfBirth)} </p>
      </div>
    </div>
  )
}
import NewsletterTable from "@/components/table/NewsletterTable";
import AdminLayout from "@/layout/AdminLayout";

export default function NewsletterSubscribers() {
  return (
    <AdminLayout title="Newsletter Subscribers">
      <section>
        <NewsletterTable />
      </section>
    </AdminLayout>
  );
}

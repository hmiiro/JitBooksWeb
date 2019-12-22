// Get visible invoices
const getVisibleInvoices = (invoices, { text, sortBy, startDate, endDate }) => {
  return invoices
    .filter(invoice => {
      const startDateMatch =
        typeof startDate !== 'number' || invoice.invoiceDate >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || invoice.invoiceDate <= endDate;
      const textMatch =
        invoice.status.toLowerCase().includes(text.toLowerCase()) ||
        invoice.id.toLowerCase().includes(text.toLowerCase()) ||
        invoice.customer.toLowerCase().includes(text.toLowerCase()) ||
        invoice.totAmount.toString().includes(text.toLowerCase()) ||
        invoice.totBal.toString().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.invoiceDate < b.invoiceDate ? 1 : -1;
      } else if (sortBy === 'amount') {
        return a.totalAmount < b.totalAmount ? 1 : -1;
      }
    });
};

export default getVisibleInvoices;

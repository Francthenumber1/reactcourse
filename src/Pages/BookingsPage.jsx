const BookingsPage = () => {
  return (
    <section className="container mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold mb-6">Meine Buchungen</h1>

      {/* Static Booking Card */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-bold">Herrenfriseur – Stilvolle Haarschnitte</h2>
        <p>Datum: 2024-11-30</p>
        <p>Status: Bestätigt</p>
        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
          Buchung stornieren
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-bold">Koch für private Veranstaltungen</h2>
        <p>Datum: 2024-12-15</p>
        <p>Status: Ausstehend</p>
        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
          Buchung stornieren
        </button>
      </div>

      {/* Message if there are no bookings */}
      <p>Keine weiteren Buchungen vorhanden.</p>
    </section>
  );
};

export default BookingsPage;

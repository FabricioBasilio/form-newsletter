import Form from "./components/Form";

function App() {
  return (
    <main>
      <h1 className="text-blue-500">Inscreva-se</h1>
      <p>Assine nossa Newsletter e mantenha-se informado</p>
      <section>
        <Form />
      </section>
      <p>Ao se inscrever, você passará a receber os nossos e-mails com as melhores dicas, novidades e ofertas.</p>
    </main>
  );
}

export default App;

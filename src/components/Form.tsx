function Form() {
  return (
    <form className="flex flex-col gap-3">
      <div className="flex flex-col">
        <label htmlFor="nome" className="text-sm">
          Nome
        </label>
        <input
          type="text"
          placeholder="Digite o seu nome"
          id="nome"
          className="bg-white rounded-lg py-2 px-2 text-sm placeholder:text-stone-400 placeholder:text-sm"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="nome" className="text-sm">
          E-mail
        </label>
        <input
          type="email"
          placeholder="Insira o seu melhor e-mail"
          id="email"
          className="bg-white rounded-lg py-2 px-2 text-sm placeholder:text-stone-400 placeholder:text-sm"
        />
      </div>
      <section className="flex flex-col">
        <a href="#" className="text-xs underline mb-2">
          Leia os termos
        </a>
        <div className="flex gap-2 items-center">
          <input type="checkbox" id="termos" />
          <label htmlFor="termos" className="text-sm">
            Concordo com os termos
          </label>
        </div>
      </section>
      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white"
      >
        Cadastrar
      </button>
    </form>
  );
}

export default Form;

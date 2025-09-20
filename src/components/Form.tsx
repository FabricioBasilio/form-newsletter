function Form() {
  return (
    <form>
      <div>
        <label htmlFor="nome">Nome</label>
        <input type="text" placeholder="Digite o seu nome" id="nome" />
      </div>
      <div>
        <label htmlFor="nome">E-mail</label>
        <input
          type="email"
          placeholder="Insira o seu melhor e-mail"
          id="email"
        />
      </div>
      <section>
        <a href="#">Leia os termos</a>
        <div>
          <input type="checkbox" id="termos" />
          <label htmlFor="termos">Concordo com os termos</label>
        </div>
      </section>
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Form;

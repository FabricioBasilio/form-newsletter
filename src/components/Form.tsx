import { useState } from "react";
import type { FormEvent } from "react";
import type { User } from "../types/User";
import validate from "../utils/validate";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [erros, setErros] = useState<User | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setErros(null);

    const data: User = {
      name,
      email,
      agree,
    };

    const validateErrors = validate(data);

    console.log(data, validateErrors);

    if (Object.keys(validateErrors).length > 0) {
      setErros(validateErrors);
      return;
    }

    setName("");
    setEmail("");
    setAgree(false);

    alert("Obrigado por se inscrever!");
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="nome" className="text-sm">
          Nome
        </label>
        <input
          type="text"
          value={name}
          placeholder="Digite o seu nome"
          id="nome"
          className="bg-white rounded-lg py-2 px-2 text-sm placeholder:text-stone-400 placeholder:text-sm"
          onChange={(e) => setName(e.target.value)}
        />
        {erros?.name && (
          <small className="text-xs text-red-500 mt-1">{erros?.name}</small>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="nome" className="text-sm">
          E-mail
        </label>
        <input
          type="email"
          value={email}
          placeholder="Insira o seu melhor e-mail"
          id="email"
          className="bg-white rounded-lg py-2 px-2 text-sm placeholder:text-stone-400 placeholder:text-sm"
          onChange={(e) => setEmail(e.target.value)}
        />
        {erros?.email && (
          <small className="text-xs text-red-500 mt-1">{erros?.email}</small>
        )}
      </div>
      <section className="flex flex-col">
        <a href="#" className="text-xs underline mb-2">
          Leia os termos
        </a>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={agree}
            id="agree"
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="agree" className="text-sm">
            Concordo com os termos
          </label>
        </div>
        {erros?.agree && (
          <small className="text-xs text-red-500 mt-1">{erros?.agree}</small>
        )}
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

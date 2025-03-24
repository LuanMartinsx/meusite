import Link from "next/link";

export function Header() {
  return (
    <header className="bg-black text-lime-400 p-1">
      <div className= "flex justify-center m-1 text-xl">
     <div className="flex space-x-5 mr-96 text-center">
     <h1 className= "">
          <Link href={"/"}>Início</Link> 
      </h1>
      <h1 className= "">
          <Link href={"/sobremim"}>Sobre Mim</Link> 
      </h1>
      <h1 className= "">
          <Link href={"/projetos"}>Projetos</Link> 
      </h1>
      <h1 className= "">
          <Link href={"/hobbies"}>Hobbies</Link> 
      </h1>
     </div>
     <div className="flex space-x-2">
      <button>
      <Link href={"/login"}>Login</Link>
      </button>
     <h1 className= "bg-lime-400 text-black">
          <Link href={"/contato"}>Contato</Link> 
      </h1>
     </div>
      </div>
    </header>
  );
}
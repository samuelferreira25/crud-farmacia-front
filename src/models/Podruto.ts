import Categoria from './Categoria';


export default interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  categoria: Categoria| null;

}
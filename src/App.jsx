import React, { useState }from 'react';
import styled from 'styled-components';


const App = () =>{

  const [ lista, setLista] = useState([]);
  const [ novoItem, setNovoItem] = useState("");

  function adicionarItem(){
    if(novoItem.length <= 0){
      alert("Por favor, digite algo no campo criar tarefa");
      return;
    };

    setLista([... lista, novoItem]);

    setNovoItem("");
  };

  function deletarItem(index){
    let tmpArray = [...lista]
    tmpArray.splice(index, 1);

    setLista(tmpArray);
  };

  return(
    <Container>

        <ToDOTitle>
          <h1>Tarefa</h1>
          <h3>Minhas tarefas</h3>
        </ToDOTitle>
          
        <ToDOInputs>
          <input
            type='text'
            placeholder='Criar tarefa'
            value={novoItem}
            onChange={ e => setNovoItem (e.target.value)}
          />

          <button onClick={(e) => adicionarItem(e.target.value)}>Adicionar</button>
        </ToDOInputs>

        <ToDoItem>
          <ul>
            {
              lista.map((item, index) =>(
                <li>
                  {item}
                  <button onClick={() => deletarItem(index)}>Deletar</button>
                </li>
            ))}
          </ul>
        </ToDoItem>
      
    </Container>
  )
}

export default App;

const Container = styled.div`
  width: 312px;
  height: 600px;
  margin-top: 50px;
  overflow-x: hidden;

  border-radius: 20px;
  border: 10px solid #4A13E7;
  background-color: #0d0d0d;
`;


const ToDOTitle = styled.div`
  margin-top: 100px;
  margin-bottom: 30px;
  text-align: center;
  h1{
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 400;
    color: #ffffff;
  }
  h3{
    font-size: 0.8rem;
    font-weight: 500;
    text-decoration: 2px underline #4A13E7;
    color: #ffffff;
  }
`;

const ToDOInputs = styled.div`
  text-align: center;
  input{
    padding: 8px 15px;
    border-radius: 10px;
    border: none;
  }
  button{
    margin-left: 10px;
    width: 65px;
    padding: 8px 0;

    border: none;
    border-radius: 20px;

    color: #ffffff;
    background-color: #EA3C0A;
  }
  button:hover{
    background-color: #F05528;
  }

`;

const ToDoItem = styled.div`
  margin-top: 30px;
  ul{
    margin-left: 10px;
  }
  li{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;

    list-style: none;
    font-size: 0.7rem;
    color: #fff;
  }
  button{
    margin-right: 10px;
    padding: 0 5px;

    border: none;
    border-radius: 10px;
    
    color: #fff;
    background-color: #CE2929;
    transition: all 200ms ease;
  }
  button:hover{
    background-color: #FF0000;
  }
`;
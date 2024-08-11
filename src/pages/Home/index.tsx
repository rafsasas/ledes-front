import React from 'react'
import * as S from './styles.ts';

const Home = () => {
    return(
        <S.Container>
             <S.BackButton onClick={() => alert('Voltar clicado!')}>
                ← Voltar
            </S.BackButton>
            <S.Box>
        <S.Header>
          <S.TextHeader>Instituição</S.TextHeader>
          <S.ButtonHeader onClick={() => alert('Botão clicado!')}>
            +Adicionar
          </S.ButtonHeader>
        </S.Header>
        
        <S.Table>
      <S.TableHeader>
        <S.HeaderItem>Nome</S.HeaderItem>
        <S.HeaderItem>Sigla</S.HeaderItem>
        <S.HeaderItem>País</S.HeaderItem>
        <S.HeaderItem>Ações</S.HeaderItem>
      </S.TableHeader>

      <S.TableRow>
        <S.RowItem>Exemplo 1</S.RowItem>
        <S.RowItem>EX1</S.RowItem>
        <S.RowItem>Brasil</S.RowItem>
        <S.RowItem>
          <S.ActionButton>Editar</S.ActionButton>
          <S.ActionButton>Excluir</S.ActionButton>
        </S.RowItem>
      </S.TableRow>

    </S.Table>
      </S.Box>
        </S.Container>
    )
}

export default Home;
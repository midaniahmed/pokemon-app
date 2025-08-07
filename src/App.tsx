import { Container } from './modules/layout/Container';
import { Header } from './modules/layout/Header';
import { PokemonList } from './modules/pokemon-list/PokemonList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <Container>
        <PokemonList />
      </Container>
    </div>
  );
}

export default App;

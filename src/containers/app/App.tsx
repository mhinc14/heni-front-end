import ApolloProviderWrapper from "apollo";
import CountriesContainer from "containers/countries";

function App() {
  return (
    <ApolloProviderWrapper>
      <CountriesContainer />
    </ApolloProviderWrapper>
  );
}

export default App;

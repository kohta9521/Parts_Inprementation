import { useTranslation } from 'react-i18next';
 
const AppPage = () => {
  const { i18n } = useTranslation();
 
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
 
  return (
    <div className="App">
      <div>
        <button onClick={() => changeLanguage('ja')}>ja</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </div>
      <TestComponent />
    </div>
  );
}
 
function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AppPage />
    </Suspense>
  );
}

export default App;

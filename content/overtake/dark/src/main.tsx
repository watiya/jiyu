import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/css/globals.css'
import App from './App.tsx'
import Spinner from './views/spinner/Spinner.tsx'
import { CustomizerContextProvider } from './context/CustomizerContext.tsx'
import './utils/i18n';
import { DashboardContextProvider } from './context/DashboardContext/DashboardContext.tsx'

async function deferRender(){
  const {worker} = await import("./api/mocks/browser.ts");
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}


deferRender().then(() => {
  createRoot(document.getElementById('root')!).render(
    <DashboardContextProvider>
    <CustomizerContextProvider>
  <Suspense fallback={<Spinner />}>
          <App />
      </Suspense>
      </CustomizerContextProvider>
      </DashboardContextProvider>
      ,
  )
})


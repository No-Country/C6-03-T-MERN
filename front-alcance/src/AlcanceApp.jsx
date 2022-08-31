import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { AppRouter, AppRouterNoLogin } from "./router"
import { store } from "./store"


export const AlcanceApp = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <AppRouter />        
      </BrowserRouter>
    </Provider>
  )
}

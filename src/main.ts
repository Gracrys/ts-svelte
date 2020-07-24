import App from './components/App.svelte';


const app = new App({
  target: document.body,
  props: {
    name: 'Svelte',
  },
});

if (module.hot) {
  module.hot.accept()
}


export default app

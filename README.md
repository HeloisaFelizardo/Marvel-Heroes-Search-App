      Tecnologias utilizadas no projeto:
        - Styled components
        - React
        - TypeScript
        - JavaScript
        - HTML
        - CSS
        - node npm
        - Git
        - Github
        - Fetch Api


      - name: Install dependencies
        run: npm install

      - Para visualizar a aplicação em ambiente local é necessário inserir suas chaves da API Marvel:
         - PUBLIC_KEY
         - PRIVATE_KEY
         No arquivo marvelApi.ts

      - name: Executar a aplicação localmente
        run: npm start

      De acordo com a documentação da API marvel, sua chave privada não pode ser compartilhada.

      No contexto do React, não é recomendado usar variáveis de ambiente diretamente no cliente, pois elas seriam expostas no código JavaScript enviado ao navegador. Portanto, é necessário uma abordagem diferente para proteger suas variáveis sensíveis.

      Uma maneira comum de lidar com variáveis de ambiente no React é usando variáveis de ambiente definidas no servidor durante o processo de compilação do aplicativo. Isso pode ser feito através de uma estratégia de substituição de variáveis durante a construção ou implantação do aplicativo.

      Aqui está um exemplo de como você pode configurar suas variáveis de ambiente no processo de construção do React:

      1. Crie um arquivo `.env.production` na raiz do seu projeto React. Este arquivo conterá suas variáveis de ambiente sensíveis para o ambiente de produção.

      2. No arquivo `marvelApi.ts` (ou em qualquer outro arquivo em que você precise acessar as variáveis de ambiente), você pode usar o objeto `process.env` diretamente para acessar as variáveis de ambiente:

      ```javascript
      const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
      // Resto do código do arquivo
      ```

      Observe que as variáveis de ambiente que você deseja acessar no cliente devem começar com o prefixo `REACT_APP_`. Isso é necessário para evitar colisões com outras variáveis de ambiente no ambiente de construção do React.

      - Agora, ao executar `npm run build`, as variáveis de ambiente definidas no arquivo `.env.production` serão substituídas no processo de construção do React e estarão disponíveis no código JavaScript resultante.

      Lembre-se de nunca enviar o arquivo `.env.production` para o controle de versão, pois ele contém informações sensíveis. Certifique-se de configurar o controle de versão para ignorar o arquivo `.env.production` no seu arquivo `.gitignore`.

      - name: Deploy application
        run: npm run deploy

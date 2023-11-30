REM copy .env-pro.txt .env
REM NÃO USAR npm i no BAT pois dá problema
REM DELETA A PASTA BUILD POR GARANTIA
rd /s build
REM COMPILA O REACT
npm run build
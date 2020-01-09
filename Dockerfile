 FROM node:latest  
   
 RUN mkdir -p /usr/src/api  
 RUN npm install nodemon -g  
   
 WORKDIR /usr/src/api  
 COPY api /usr/src/api
 RUN yarn install 
   
 EXPOSE 3001
   
 CMD ["yarn", "dev"]
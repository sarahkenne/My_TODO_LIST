FROM nginx:alpine

# Supprimer le contenu par défaut de Nginx
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/

# Copier les fichiers statiques dans le répertoire approprié pour Nginx
COPY app /usr/share/nginx/html/

EXPOSE 80

# Lancer Nginx en mode premier plan
CMD ["nginx", "-g", "daemon off;"]

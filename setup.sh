
#rm -rf dist && ng build && gcloud app deploy --version=v
#!/bin/zsh

gcloud config set project storiesboardde
gcloud app versions list
gcloud config get project
VERSION=$1

docker build -t sgpublicregistry.azurecr.io/equations-editor:latest .

docker login sgpublicregistry.azurecr.io

if [ -z "$VERSION" ]
then
    echo "No version provided"
else
    docker push sgpublicregistry.azurecr.io/equations-editor:$VERSION
fi

docker push sgpublicregistry.azurecr.io/equations-editor:latest

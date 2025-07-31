#!/bin/bash
if [ -z "$1" ]
  then
    TAG="haiqv/oasis-frontend-landing:latest"
  else
    TAG="$1"
fi
echo "Tag: $TAG"
npm run build
docker build -t $TAG -f Dockerfile_using_dist . --platform linux/amd64
docker push $TAG
# kubectl set image deploy oasis-frontend-landing oasis-frontend-landing=$TAG -n haiqv
# kubectl rollout restart deployment oasis-frontend-landing -n haiqv
echo '.'
echo '=== Done ==='
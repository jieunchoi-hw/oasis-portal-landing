@ECHO OFF
SET TAG=%1
if "%1" == "" (
  SET TAG="haiqv/oasis-frontend-landing:latest"
)
ECHO Tag: %TAG%
CALL npm run build
CALL docker build -t %TAG% -f Dockerfile_using_dist . --platform linux/amd64
CALL docker push %TAG%
CALL kubectl set image deploy oasis-frontend-landing oasis-frontend-landing=%TAG% -n haiqv
CALL kubectl rollout restart deployment oasis-frontend-landing -n haiqv
ECHO .
ECHO === Done ===
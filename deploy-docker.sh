#!/bin/bash

# 配置信息
REGISTRY="crpi-xax3ld14sgw2kl3j.cn-beijing.personal.cr.aliyuncs.com"
NAMESPACE="lero2025"
REPOSITORY="lero_fo"
TAG="latest"
USERNAME="aliyun7585130958"

# 完整的镜像名称
IMAGE_NAME="$REGISTRY/$NAMESPACE/$REPOSITORY:$TAG"

echo "===== 开始部署禅境佛学应用到阿里云容器镜像服务 ====="

# 1. 构建Docker镜像
echo "构建Docker镜像..."
docker build -t $IMAGE_NAME -f Dockerfile.node .

# 2. 登录到阿里云容器镜像服务
echo "登录到阿里云容器镜像服务..."
echo "请输入您的阿里云容器镜像服务密码:"
docker login --username=$USERNAME $REGISTRY

# 3. 推送镜像到阿里云
echo "推送镜像到阿里云..."
docker push $IMAGE_NAME

# 4. 提供部署说明
echo "===== 部署完成 ====="
echo "镜像已成功推送到: $IMAGE_NAME"
echo ""
echo "在阿里云ECS上运行以下命令来部署应用:"
echo "docker pull $IMAGE_NAME"
echo "docker run -d -p 80:3000 --name zen-wisdom $IMAGE_NAME"
echo ""
echo "如果您使用阿里云容器服务Kubernetes版(ACK)，可以使用以下YAML配置:"
cat << EOF > zen-wisdom-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: zen-wisdom
spec:
  replicas: 1
  selector:
    matchLabels:
      app: zen-wisdom
  template:
    metadata:
      labels:
        app: zen-wisdom
    spec:
      containers:
      - name: zen-wisdom
        image: $IMAGE_NAME
        ports:
        - containerPort: 3000
        env:
        - name: DEEPSEEK_API_KEY
          value: "sk-453aa010dca34e33b279fef31aceae5b"
---
apiVersion: v1
kind: Service
metadata:
  name: zen-wisdom
spec:
  selector:
    app: zen-wisdom
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer
EOF

echo "已生成Kubernetes部署文件: zen-wisdom-deployment.yaml"
echo "使用以下命令部署到Kubernetes集群:"
echo "kubectl apply -f zen-wisdom-deployment.yaml"

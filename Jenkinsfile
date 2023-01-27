pipeline {
    agent {
        node {
            label 'react-app'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/fabienboy661/repo-17'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
                sh 'docker build -t fabien123/react-app:latest .'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker login -u fabien123 -p fabien992301'
                sh 'docker push fabien123/react-app:latest'
                sh 'gcloud auth login --project=Faby'
                sh 'gcloud container clusters get-credentials cluster-1 --zone us-central1-a --project Faby'
                sh 'kubectl apply -f k8s/deployment.yaml'
                sh 'kubectl apply -f k8s/service.yaml'
            }
        }
    }
}
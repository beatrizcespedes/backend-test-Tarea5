pipeline {
    agent any

    environment {
        NEXUS_REGISTRY = 'localhost:8085/docker-repo'
        IMAGE_NAME = 'my-image'
        }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install' // O el comando correspondiente a tu gestor de dependencias
            }
        }

        stage('Testing') {
            steps {
                bat 'npm test' // O el comando correspondiente a tus pruebas
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build' // O el comando correspondiente a la construcción de tu proyecto
            }
        }

                
        stage('Build Docker Image') {
            steps {
                bat "docker build -t ${IMAGE_NAME}:${env.BUILD_NUMBER} ."
            }
        }

        stage('Tag & Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'DockerJenkins', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    bat """
                        docker login -u %DOCKER_USERNAME% -p %DOCKER_PASSWORD% ${NEXUS_REGISTRY}
                        docker tag ${IMAGE_NAME}:${env.BUILD_NUMBER} ${NEXUS_REGISTRY}/${IMAGE_NAME}:${env.BUILD_NUMBER}
                        docker tag ${IMAGE_NAME}:${env.BUILD_NUMBER} ${NEXUS_REGISTRY}/${IMAGE_NAME}:latest
                        docker push ${NEXUS_REGISTRY}/${IMAGE_NAME}:${env.BUILD_NUMBER}
                        docker push ${NEXUS_REGISTRY}/${IMAGE_NAME}:latest
                    """
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
            cleanWs() // Limpieza después del pipeline
        }
        success {
            echo 'Pipeline succeeded.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}

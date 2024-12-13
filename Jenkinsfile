pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS = 'docker-credentials'
        NEXUS_REGISTRY = 'http://localhost:8081/repository/tarea5/'
        IMAGE_NAME = 'nexus'
        }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install' // O el comando correspondiente a tu gestor de dependencias
                }
            }
        }

        stage('Testing') {
            steps {
                script {
                    bat 'npm test' // O el comando correspondiente a tus pruebas
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    bat 'npm run build' // O el comando correspondiente a la construcción de tu proyecto
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${NEXUS_REGISTRY}/${IMAGE_NAME}:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Tag & Push Docker Image') {
            steps {
                bat """ docker login -u %DOCKER_CREDENTIALS% -p %DOCKER_PASSWORD% ${NEXUS_REGISTRY}
                docker tag ${IMAGE_NAME}:${env.BUILD_NUMBER} ${NEXUS_REGISTRY}/${IMAGE_NAME}:${env.BUILD_NUMBER} 
                docker tag ${IMAGE_NAME}:${env.BUILD_NUMBER} ${NEXUS_REGISTRY}/${IMAGE_NAME}:latest 
                docker push ${NEXUS_REGISTRY}/${IMAGE_NAME}:${env.BUILD_NUMBER} docker push ${NEXUS_REGISTRY}/${IMAGE_NAME}:latest """
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

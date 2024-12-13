pipeline {
    agent any
environment {
        environment { DOCKER_CREDENTIALS_ID = 'docker-credentials'
         NEXUS_REGISTRY = 'http://localhost:8081/repository/tarea5/'
         IMAGE_NAME = 'nexus' 
            }

    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio desde la rama especificada
                git branch: 'main', url: 'https://github.com/beatrizcespedes/backend-test-Tarea5.git'
            }
        }
        stage('Instalar Dependencias') 
        {
            steps {
                // Instala dependencias
                powershell 'npm install'  // O el comando correspondiente para tu gestor de paquetes
            }
        }
        stage ('Hacer pruebas'){
            steps{
                powershell 'npm test' //ejecuta pruebas
            }
        }
        stage ('Build'){
            steps{
                powershell 'npm run build' //ejecuta build
            }
        }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    def app = docker.build("${DOCKER_REGISTRY_URL}/${IMAGE_NAME}:${env.BUILD_NUMBER}")
                }
            }
        }
        stage('Tag & Push Docker Image') {
            steps {
                script {
                    docker.withRegistry("https://${DOCKER_REGISTRY_URL}", DOCKER_CREDENTIALS_ID) {
                        def image = docker.image("${DOCKER_REGISTRY_URL}/${IMAGE_NAME}:${env.BUILD_NUMBER}")
                        image.push()
                        image.push('latest')
                    }
                }
            }
        }
    }
        
    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'Pipeline succeeded.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}


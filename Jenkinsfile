pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS = 'docker-credentials'
        NEXUS_REGISTRY = 'localhost:8085/docker-repo'
        IMAGE_NAME = 'my-image'
        }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install' // O el comando correspondiente a tu gestor de dependencias
                }
            }
        }

        stage('Testing') {
            steps {
                script {
                    sh 'npm test' // O el comando correspondiente a tus pruebas
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'npm run build' // O el comando correspondiente a la construcción de tu proyecto
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
                script {
                    docker.withRegistry("http://${NEXUS_REGISTRY}", DOCKER_CREDENTIALS) {
                        def image = docker.image("${NEXUS_REGISTRY}/${IMAGE_NAME}:${env.BUILD_NUMBER}")
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

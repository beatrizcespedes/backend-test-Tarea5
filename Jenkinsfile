pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Clona el repositorio desde la rama especificada
                git branch: 'main', url: 'https://github.com/beatrizcespedes/backend-test-Tarea5.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Instala dependencias
                sh 'npm install'  // O el comando correspondiente para tu gestor de paquetes
            }
        }
        // Agrega más etapas según necesites
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

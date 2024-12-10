pipeline {
    agent any
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
                powershell 'npm build' //ejecuta build
            }
        }
        }
        // Agrega más etapas según necesites
    
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

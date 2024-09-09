//pantalla de inicio
class Start {
    constructor() {
    this.opacity = 255;
    this.startTime = millis();
    }

    draw() {
      background(1, 1, 128);
      textSize(17);
      fill(255);
      textAlign(LEFT, TOP);
      text("Se ha detectado un error fatal y el sistema se ha apagado para evitar daños irreversibles a su computadora,\nEl problema parece haber sido causado por el siguiente archivo: VIDA.exe,\n\nEsto es una falla crítica del sistema y no se pueden tomar más acciones para resolver el problema.\nEste error es irreversible y el sistema no puede reiniciarse.\nContacte a su administrador del sistema o al grupo de soporte técnico para obtener más asistencia\n\nInformación técnica:\n\n*** STOP: 0x0000007E (0xC0000005, 0xF74B7D24, 0xF78B7D24, 0xF78B7D24)\n*** VIDA.exe dejo de funcionar - Dirección F74B7D24 base en F74B6000, Marca de tiempo 3d6dd67c\n\n***Información adicional del sistema:\nControlador de memoria: Error en la dirección F74B7D24\nPágina de error: 0x000000C5\nTiempo de actividad: ?????\n\n*** Registros de la memoria:\nFallo en el bloque de memoria: Ae367Z\nCódigo de falla: 0x80070057\nInformación del procesador: Cerebro i7-9750H, 2.60 GHz\n\n*** Estado del sistema:\nProcesos activos: 32\nServicios en ejecución: minimos\nEspacio en disco: 123 PB libres\nMemoria física:  estado critico, 16 PB instalados, 8 PB libres\n\n*** Mensajes de error del sistema:\n0x000000D1: Error en la verificación del controlador del Cuerpo\n0x0000001E: Excepción no controlada en el módulo VIDA.exe", 10, 50);
      textFont(courierNew);
      textAlign(CENTER, CENTER);
      fill(0, this.opacity);
      textSize(20);
      text('PULSA "ENTER" PARA CONTINUAR\n(para navegar entre escenas sin tener en cuenta la logica del juego usa "1,2,3" y 4 para reiniciar', width / 2, 20);
      textAlign(CENTER, BOTTOM);
      text('Creado por Martina Mainero, proyecto 1 de Informatica Aplicada I', width / 2, height)
      if (millis() - this.startTime > 5000) {
        this.opacity -= 2; 
        this.opacity = max(this.opacity, 0);
      }
    }
  }
  
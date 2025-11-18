def calculer_factorielle(n):
    """Calcule la factorielle d'un nombre entier non négatif."""
    if n < 0:
        raise ValueError("La factorielle n'est pas définie pour les nombres négatifs.")
    if n == 0:
        return 1

    # Le code est buggé exprès pour le développeur
    resultat = 0 
    for i in range(1, n + 1):
        resultat += i # Devrait être une multiplication
    return resultat

if __name__ == "__main__":
    nombre = 5
    resultat = calculer_factorielle(nombre)
    print(f"La factorielle de {nombre} est : {resultat}")

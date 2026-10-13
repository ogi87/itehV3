# Uputstvo: Prebacivanje kloniranog repozitorijuma na lični GitHub

Ovo uputstvo opisuje standardni postupak kada sa fakulteta (ili bilo kog drugog izvora) kloniraš repozitorijum, napraviš svoje izmene, i želiš da ga sačuvaš na svom ličnom GitHub nalogu bez menjanja originalnog repozitorijuma.

---

## 1. Preusmeravanje udaljenih (remote) repozitorijuma

Kada kloniraš projekat, adresa sa koje si ga preuzeo po difoltu dobija ime `origin`.  
Standardna i najbezbednija praksa je da taj originalni repo preimenuješ u `upstream`, a svoj novi GitHub repo postaviš kao `origin`:

```bash
# 1. Preimenuj originalni fakultetski repo u "upstream" (kao rezervu/referencu)
git remote rename origin upstream

# 2. Dodaj link ka svom novom GitHub repozitorijumu kao "origin"
git remote add origin https://github.com/TVOJ_USERNAME/IME_REPOZITORIJUMA.git

# 3. Proveri da li su adrese ispravno konfigurisane
git remote -v
```

Nakon ovoga, izlaz bi trebalo da izgleda ovako:
* `origin` -> pokazuje na tvoj GitHub (gde ti šalješ izmene)
* `upstream` -> pokazuje na fakultetski GitHub (odakle po potrebi samo preuzimaš novosti)

---

## 2. Čuvanje lokalnih izmena (Commit)

Pre slanja na GitHub, potrebno je da sačuvaš izmene u lokalnoj istoriji:

```bash
# 1. Dodaj sve nove i izmenjene fajlove u stage
git add .

# 2. Kreiraj komit sa opisom onoga što je urađeno
git commit -m "Opis tvojih izmena"

# 3. Osiguraj se da se grana zove 'main' (standard na GitHub-u)
git branch -M main
```

---

## 3. Slanje koda na tvoj GitHub (Push)

Pošalji svoj kod na svoj GitHub nalog:

```bash
git push -u origin main
```

> **Šta znači `-u` (`--set-upstream`)?**  
> Povezuje tvoju lokalnu granu `main` sa granom `main` na tvom GitHub-u.  
> Za sve buduće izmene na tom projektu dovoljno je da kucaš samo:
> ```bash
> git push
> ```

---

## 4. Kako povući novosti sa fakultetskog repoa (ako asistenti okače nešto novo)?

Ako tokom semestra asistenti ažuriraju svoj kod, možeš bezbedno povući njihove izmene u svoj projekat:

```bash
git pull upstream master
# ili (zavisno od toga kako se zove njihova grana, npr. main)
git pull upstream main
```

Nakon toga samo pošalješ spojeni kod na svoj GitHub:
```bash
git push
```

---

## 💡 Brza alternativa (bez čuvanja originalnog repoa)

Ako ti veza sa fakultetskim repozitorijumom uopšte više nije potrebna, možeš samo pregaziti adresu `origin`-a u jednoj komandi:

```bash
git remote set-url origin https://github.com/TVOJ_USERNAME/IME_REPOZITORIJUMA.git
git push -u origin main
```

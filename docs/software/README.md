# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення та початкового наповнення бази даних

```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Account` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` CHAR(255) NOT NULL,
  `password` CHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Survey`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Survey` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `isPaused` TINYINT UNSIGNED NOT NULL,
  `isNamed` TINYINT UNSIGNED NOT NULL,
  `name` CHAR(255) NULL,
  `duration` CHAR(255) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_Survey_Account1`
    FOREIGN KEY (`id`)
    REFERENCES `mydb`.`Account` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Question` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Text` CHAR(255) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_Question_Survey1`
    FOREIGN KEY (`id`)
    REFERENCES `mydb`.`Survey` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Response`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Response` (
  `id` INT UNSIGNED NULL AUTO_INCREMENT,
  `Value` VARCHAR(16384) NULL,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_Response_Question`
    FOREIGN KEY (`id`)
    REFERENCES `mydb`.`Question` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Response_Account1`
    FOREIGN KEY (`id`)
    REFERENCES `mydb`.`Account` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Link`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Link` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `uses` INT NOT NULL,
  `responces` INT NOT NULL,
  `usageLimit` INT NULL,
  `responceLimit` INT NULL,
  `path` CHAR(32) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_Link_Survey1`
    FOREIGN KEY (`id`)
    REFERENCES `mydb`.`Survey` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```

## RESTfull-сервіс для керування опитуваннями

Код серверу (Python, Flask):
```python
from flask import Flask, request
import mariadb as mdb
import json
import sys

def init_db():
    return mdb.connect(host="127.0.0.1", port=3306, user="user", password="testing432")

c = 0

app = Flask(__name__)

@app.route("/api/<endpoint>", methods = ["GET", "POST", "PUT", "DELETE"])
def api_test(endpoint):
    se = endpoint

    match se:
        case "counter":
            global c
            c += 1
        case "account":
            c = init_db()
            cur = c.cursor()

            match request.method:
                case "GET":
                    cur.execute("SELECT id, username FROM odb.account;")
                    r = [{"id": i, "username": j} for i, j in cur]
                    c.close()
                    return json.dumps(r)
                case "POST":
                    d = request.get_json()
                    cur.execute(f"INSERT INTO odb.account (username, password) VALUES (\"{d['username']}\", \"{d['password']}\");")
                    c.commit()
                    c.close()
                    return '{"success": true}\n'
                case "PUT":
                    d = request.get_json()
                    cur.execute(f"UPDATE odb.account SET username = \"{d['username']}\", password = \"{d['password']}\" WHERE id = {d['id']};")
                    c.commit()
                    c.close()
                    return '{"success": true}\n'
                case "DELETE":
                    d = request.get_json()
                    cur.execute(f"SELECT id, username FROM odb.account WHERE id = {d['id']};")
                    r = [{"id": i, "username": j} for i, j in cur]
                    cur.execute(f"DELETE FROM odb.account WHERE id = {d['id']};")
                    c.commit()
                    c.close()
                    return f'{r}\n'
        case "survey":
            c = init_db()
            cur = c.cursor()

            match request.method:
                case "GET":
                    cur.execute("SELECT id, isPaused, isNamed, name, duration, account_id FROM odb.survey;")
                    r = [{"id": i[0], "isPaused": i[1], "isNamed": i[2], "name": i[3], "duration": i[4], "account_id": i[5]} for i in cur]
                    c.close()
                    return json.dumps(r)

                case "POST":
                    d = request.get_json()
                    cur.execute(f"INSERT INTO odb.survey (isPaused, isNamed, name, duration, account_id) VALUES ({d['isPaused']}, {d['isNamed']}, \"{d['name']}\", \"{d['duration']}\", {d['account_id']});")
                    c.commit()
                    c.close()
                    return '{"success": true}\n'

                case "PUT":
                    d = request.get_json()
                    cur.execute(f"UPDATE odb.survey SET isPaused = {d['isPaused']}, isNamed = {d['isNamed']}, name = \"{d['name']}\", duration = \"{d['duration']}\" WHERE id = {d['id']};")
                    c.commit()
                    c.close()
                    return '{"success": true}\n'

                case "DELETE":
                    d = request.get_json()
                    cur.execute(f"SELECT id, isPaused, isNamed, name, duration, account_id FROM odb.survey WHERE id = {d['id']};")
                    r = [{"id": i[0], "isPaused": i[1], "isNamed": i[2], "name": i[3], "duration": i[4], "account_id": i[5]} for i in cur]
                    cur.execute(f"DELETE FROM odb.survey WHERE id = {d['id']};")
                    c.commit()
                    c.close()
                    return f'{r}\n'

        case "link":
            c = init_db()
            cur = c.cursor()

            match request.method:
                case "GET":
                    cur.execute("SELECT id, uses, responces, usageLimit, responceLimit, path, survey_id FROM odb.link;")
                    r = [{"id": i[0], "uses": i[1], "responces": i[2], "usageLimit": i[3], "responceLimit": i[4], "path": i[5], "survey_id": i[6]} for i in cur]
                    c.close()
                    return json.dumps(r)

                case "POST":
                    d = request.get_json()
                    cur.execute(f"INSERT INTO odb.link (usageLimit, responceLimit, path, survey_id) VALUES ({d['usageLimit']}, {d['responceLimit']}, \"{d['path']}\", {d['survey_id']});")
                    c.commit()
                    c.close()
                    return '{"success": true}\n'

                case "PUT":
                    d = request.get_json()
                    cur.execute(f"UPDATE odb.link SET uses = {d['uses']}, responces = {d['responces']}, usageLimit = \"{d['usageLimit']}\", responceLimit = \"{d['responceLimit']}\", path = \"{d['path']}\", survey_id = {d['survey_id']} WHERE id = {d['id']};")
                    c.commit()
                    c.close()
                    return '{"success": true}\n'

                case "DELETE":
                    d = request.get_json()
                    cur.execute(f"SELECT id, uses, responces, usageLimit, responceLimit, path, survey_id FROM odb.survey WHERE id = {d['id']};")
                    r = [{"id": i[0], "uses": i[1], "responces": i[2], "usageLimit": i[3], "responceLimit": i[4], "path": i[5], "survey_id": i[6]} for i in cur]
                    cur.execute(f"DELETE FROM odb.link WHERE id = {d['id']};")
                    c.commit()
                    c.close()
                    return f'{r}\n'

        case "question":
            c = init_db()
            cur = c.cursor()

            match request.method:
                case "GET":
                    cur.execute("SELECT id, text, survey_id FROM odb.question;")
                    r = [{"id": i[0], "text": i[1], "survey_id": i[2]} for i in cur]
                    c.close()
                    return json.dumps(r)

                case "POST":
                    d = request.get_json()
                    cur.execute(f"INSERT INTO odb.question (text, survey_id) VALUES (\"{d['text']}\", {d['survey_id']});")
                    c.commit()
                    c.close()
                    return '{"success": true}\n'

                case "PUT":
                    d = request.get_json()
                    cur.execute(f"UPDATE odb.question SET text = \"{d['text']}\", survey_id = {d['survey_id']} WHERE id = {d['id']};")
                    c.commit()
                    c.close()
                    return '{"success": true}\n'

                case "DELETE":
                    d = request.get_json()
                    cur.execute(f"SELECT id, text, survey_id FROM odb.question WHERE id = {d['id']};")
                    r = [{"id": i[0], "text": i[1], "survey_id": i[2]} for i in cur]
                    cur.execute(f"DELETE FROM odb.question WHERE id = {d['id']};")
                    c.commit()
                    c.close()
                    return f'{r}\n'

        case "responce":
            c = init_db()
            cur = c.cursor()

            match request.method:
                case "GET":
                    cur.execute("SELECT id, value, question_id, account_id FROM odb.responce;")
                    r = [{"id": i[0], "value": i[1], "question_id": i[2], "account_id": i[3]} for i in cur]
                    c.close()
                    return json.dumps(r)

                case "POST":
                    d = request.get_json()
                    cur.execute(f"INSERT INTO odb.responce (text, question_id, account_id) VALUES (\"{d['value']}\", {d['question_id']}, {d['account_id']});")
                    c.commit()
                    c.close()
                    return '{"success": true}\n'

                case "PUT":
                    d = request.get_json()
                    cur.execute(f"UPDATE odb.responce SET value = \"{d['value']}\", question_id = {d['question_id']}, account_id = {d['account_id']} WHERE id = {d['id']};")
                    c.commit()
                    c.close()
                    return '{"success": true}\n'

                case "DELETE":
                    d = request.get_json()
                    cur.execute(f"SELECT id, value, question_id, account_id FROM odb.responce WHERE id = {d['id']};")
                    r = [{"id": i[0], "value": i[1], "question_id": i[2], "account_id": i[3]} for i in cur]
                    cur.execute(f"DELETE FROM odb.responce WHERE id = {d['id']};")
                    c.commit()
                    c.close()
                    return f'{r}\n'
        case _:
            return f"work {c}\n"

@app.route("/api/survey/<no>", methods = ["GET", "PUT", "DELETE"])
def api_numbered(no):
    c = init_db()
    cur = c.cursor()

    match request.method:
        case "GET":
            cur.execute(f"SELECT id, isPaused, isNamed, name, duration, account_id FROM odb.survey WHERE id = {no};")
            r = [{"id": i[0], "isPaused": i[1], "isNamed": i[2], "name": i[3], "duration": i[4], "account_id": i[5]} for i in cur]
            c.close()
            return json.dumps(r)

        case "PUT":
            d = request.get_json()
            cur.execute(f"UPDATE odb.survey SET isPaused = {d['isPaused']}, isNamed = {d['isNamed']}, name = \"{d['name']}\", duration = \"{d['duration']}\" WHERE id = {no};")
            c.commit()
            c.close()
            return '{"success": true}\n'

        case "DELETE":
            cur.execute(f"SELECT id, isPaused, isNamed, name, duration, account_id FROM odb.survey WHERE id = {no};")
            r = [{"id": i[0], "isPaused": i[1], "isNamed": i[2], "name": i[3], "duration": i[4], "account_id": i[5]} for i in cur]
            cur.execute(f"DELETE FROM odb.survey WHERE id = {no};")
            c.commit()
            c.close()
            return f'{r}\n'

```
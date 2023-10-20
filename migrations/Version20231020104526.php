<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231020104526 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'add interest table';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE interest (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(150) NOT NULL, abstract_fr LONGTEXT DEFAULT NULL, description_fr LONGTEXT DEFAULT NULL, abstract_en LONGTEXT DEFAULT NULL, description_en LONGTEXT DEFAULT NULL, icon LONGTEXT DEFAULT NULL, bg_color VARCHAR(75) DEFAULT NULL, image VARCHAR(150) NOT NULL, ordering INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE interest');
    }
}

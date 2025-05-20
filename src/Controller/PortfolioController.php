<?php

namespace App\Controller;

use App\Services\CompetencesService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class PortfolioController extends AbstractController
{
    #[Route('/portfolio', name: 'app_portfolio')]
    public function index(): Response {
        return $this->render('portfolio/index.html.twig',);
    }
    #[Route('/portfolio/competences/{competence} ', name: 'app_portfolio_competences')]
    public function competences($competence): Response {
        switch ($competence) {
            case 'generales':
                $sous_competences = CompetencesService::LISTE_GENERALES;
                break;
            case 'specifiques':
                $sous_competences = CompetencesService::LISTE_SPECIFIQUE;
                break;
            default:
                $sous_competences = CompetencesService::LISTE_TECHNIQUE;
        }
        return $this->render('portfolio/competences.html.twig', [
            'competences' => $sous_competences,
        ]);
    }
}
